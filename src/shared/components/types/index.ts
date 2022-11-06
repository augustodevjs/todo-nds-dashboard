import {
  ButtonHTMLAttributes,
  ComponentType,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';
import { TableProps as ReactDataTableProps } from 'react-data-table-component';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  transparent?: boolean;
  variant?: 'primary' | 'danger' | 'info';
  disabled?: boolean;
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
  variant?: string;
  isRequired?: boolean;
  error?: string;
}

export interface ParticleProps {
  backgroundColor?: string;
  particlesColor?: string;
}

export type TableProps = ReactDataTableProps<any> & {
  isLoading: boolean;
};

export type ModalProps = {
  isOpen?: boolean;
  onRequestClose?: () => void;
  icon?: ComponentType;
  title?: string;
  children?: ReactNode;
  actions?: ReactNode[];
  size?: 'sm' | 'lg';
};

export interface ConfirmModalProps extends ModalProps {
  onConfirm: () => void;
  message?: string;
  isLoading: boolean;
}

export interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  isRequired?: boolean;
}
