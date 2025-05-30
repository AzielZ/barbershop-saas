import { NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        address: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      );
    }

    // Compare password
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'your-secret-key-here',
      { expiresIn: '7d' }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Error during login' },
      { status: 500 }
    );
  }
}