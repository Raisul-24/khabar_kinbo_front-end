"use client"
import { usePathname } from 'next/navigation';
import DashboardLayout from "../components/Layout/DashboardLayout/dashboardLayout";
import MainLayout from "../components/Layout/Main Layout/mainLayout";


export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Determine if the current route is part of the dashboard
  const isDashboard = pathname.startsWith('/dashboard');

  // Conditionally render the layout
  const Layout = isDashboard ? DashboardLayout : MainLayout;

  return (
      <Layout>
          {children}
      </Layout>
  );
}