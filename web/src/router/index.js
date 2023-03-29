import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/overview',
      children: [
        {
          path: 'permission',
          name: 'overview-permission',
          component: () => import('../views/overview/PermissionOverviewView.vue')
        },
        {
          path: 'machine',
          name: 'overview-machine',
          component: () => import('../views/overview/MachineOverviewView.vue')
        },
        {
          path: 'concept',
          name: 'overview-concept',
          component: () => import('../views/overview/ConceptOverviewView.vue')
        },
        {
          path: 'repo-config',
          name: 'overview-repo-config',
          component: () => import('../views/overview/RepoConfigOverviewView.vue')
        }
      ]
    },
    {
      path: '/permission-control',
      children: [
        {
          path: 'group',
          name: 'permission-control-group-management',
          component: () => import('../views/permission-control/GroupManagementView.vue')
        },
        {
          path: 'member',
          name: 'permission-control-member-management',
          component: () => import('../views/permission-control/MemberManagementView.vue')
        }
      ]
    },
    {
      path: '/business-concept',
      children: [
        {
          path: 'machine',
          name: 'business-concept-machine',
          component: () => import('../views/business-concept/MachineBusinessConceptView.vue')
        },
        {
          path: 'group',
          name: 'business-concept-group',
          component: () => import('../views/business-concept/GroupBusinessConceptView.vue')
        },
        {
          path: 'security-group',
          name: 'business-concept-security-group',
          component: () => import('../views/business-concept/SecurityGroupBusinessConceptView.vue')
        },
        {
          path: 'resource-pool',
          name: 'business-concept-resource-pool',
          component: () => import('../views/business-concept/ResourcePoolBusinessConceptView.vue')
        }
      ]
    },
    {
      path: '/config',
      children: [
        {
          path: 'repo',
          name: 'config-repo',
          component: () => import('../views/config/RepoConfigView.vue')
        },
        {
          path: 'version-control',
          name: 'config-version-control',
          component: () => import('../views/config/VersionControlConfigView.vue')
        }
      ]
    },
    {
      path: '/audit',
      name: 'audit',
      component: () => import('../views/AuditView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
