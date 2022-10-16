import { ComponentType, InputHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  children: ReactNode;
  transparent?: boolean;
}

export interface IconButtonProps {
  icon: ComponentType;
  onClick: () => void;
}

export interface PageHeaderProps {
  title: string;
  description: string;
  icon: ComponentType;
  action?: ReactNode;
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface ParticleProps {
  backgroundColor?: string;
  particlesColor?: string;
}
