import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../views/DashboardView.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../views/dashboard/HomeView.vue')
                },
                {
                    path: 'overview',
                    children: [
                        {
                            path: 'permission',
                            name: 'overview-permission',
                            component: () => import('../views/dashboard/overview/PermissionOverviewView.vue')
                        },
                        {
                            path: 'machine',
                            name: 'overview-machine',
                            component: () => import('../views/dashboard/overview/MachineOverviewView.vue')
                        },
                        {
                            path: 'concept',
                            name: 'overview-concept',
                            component: () => import('../views/dashboard/overview/ConceptOverviewView.vue')
                        },
                        {
                            path: 'repo-config',
                            name: 'overview-repo-config',
                            component: () => import('../views/dashboard/overview/RepoConfigOverviewView.vue')
                        }
                    ]
                },
                {
                    path: 'permission-control',
                    children: [
                        {
                            path: 'group',
                            name: 'permission-control-group-management',
                            component: () => import('../views/dashboard/permission-control/GroupManagementView.vue')
                        },
                        {
                            path: 'member',
                            name: 'permission-control-member-management',
                            component: () => import('../views/dashboard/permission-control/MemberManagementView.vue')
                        }
                    ]
                },
                {
                    path: 'business-concept',
                    children: [
                        {
                            path: 'machine',
                            name: 'business-concept-machine',
                            component: () => import('../views/dashboard/business-concept/MachineBusinessConceptView.vue')
                        },
                        {
                            path: 'group',
                            name: 'business-concept-group',
                            component: () => import('../views/dashboard/business-concept/GroupBusinessConceptView.vue')
                        },
                        {
                            path: 'security-group',
                            name: 'business-concept-security-group',
                            component: () => import('../views/dashboard/business-concept/SecurityGroupBusinessConceptView.vue')
                        },
                        {
                            path: 'resource-pool',
                            name: 'business-concept-resource-pool',
                            component: () => import('../views/dashboard/business-concept/ResourcePoolBusinessConceptView.vue')
                        }
                    ]
                },
                {
                    path: 'config',
                    children: [
                        {
                            path: 'repo',
                            name: 'config-repo',
                            component: () => import('../views/dashboard/config/RepoConfigView.vue')
                        },
                        {
                            path: 'version-control',
                            name: 'config-version-control',
                            component: () => import('../views/dashboard/config/VersionControlConfigView.vue')
                        }
                    ]
                },
                {
                    path: 'audit',
                    name: 'audit',
                    component: () => import('../views/dashboard/AuditView.vue')
                },
                {
                    path: 'about-me',
                    name: 'about-me',
                    component: () => import('../views/dashboard/AboutMeView.vue')
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/how-to-use',
            name: 'how-to-use',
            component: () => import('../views/HowToUseView.vue')
        },
        {
            path: '/forget-pwd',
            name: 'forget-pwd',
            component: () => import('../views/ForgetPwdView.vue')
        },
    ]
})

export default router
