import React from 'react';

// Users
const Users = React.lazy(() => import('./users/Users'));

// Posts
const Posts = React.lazy(() => import('./posts/Posts'));
const CreatePost = React.lazy(() => import('./posts/CreatePost'));
const Post = React.lazy(() => import('./posts/Post'));
const EditPost = React.lazy(() => import('./posts/EditPost'));

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/posts', exact: true, name: 'Posts', component: Posts },
  {
    path: '/posts/create',
    exact: true,
    name: 'Create Post',
    component: CreatePost,
  },
  { path: '/posts/:id', exact: true, name: 'Post', component: Post },
  {
    path: '/posts/:id/edit',
    exact: true,
    name: 'Edit Post',
    component: EditPost,
  },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/profile', name: 'Profile', element: Profile },
];

export default routes;
