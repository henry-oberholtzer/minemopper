import React from 'react';
import { useAuth } from './useAuthHook';
import AuthForm from './AuthForm';
import SampleContent from './SampleContent';

export default function AuthNavigator() {
  const {user} = useAuth();
  return user ? <SampleContent /> : <AuthForm />;
}