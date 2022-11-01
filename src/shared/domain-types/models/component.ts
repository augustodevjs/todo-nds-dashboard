import { ComponentType, InputHTMLAttributes, ReactNode } from 'react';
import { TableProps as ReactDataTableProps } from 'react-data-table-component';

export interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  children: ReactNode;
  transparent?: boolean;
  variant?: 'primary' | 'danger' | 'info';
}

export interface IconButtonProps {
  variant: 'edit' | 'remove';
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

export type TableProps = ReactDataTableProps<any>;

export type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  icon?: ComponentType;
  title: string;
  children?: ReactNode;
  actions?: ReactNode[];
};
