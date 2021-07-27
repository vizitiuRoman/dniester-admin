export const MENU_ITEMS = [
  {
    title: 'Services',
    icon: 'clipboard-outline',
    link: '/menu/services',
    home: true,
  },
  {
    title: 'Staffs',
    icon: 'shake-outline',
    link: '/menu/staffs',
    home: false,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
