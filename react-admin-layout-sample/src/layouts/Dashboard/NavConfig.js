import React from "react"
import HomeIcon from '@material-ui/icons/HomeOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import ListIcon from '@material-ui/icons/List';
import Label from "src/components/Label";
import { colors } from '@material-ui/core';

export default [
  {
    subheader: 'Pages',
    items: [
      {
        title: 'Overview',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'Dashboards',
        href: '/dashboards',
        icon: DashboardIcon,
        items: [
          {
            title: 'Default',
            href: '/dashboards/default'
          },
          {
            title: 'Analytics',
            href: '/dashboards/analytics'
          }
        ]
      }
    ]
  },
  {
    subheader: 'Support',
    items: [
      {
        title: 'Presentation',
        href: '/presentation',
        icon: PresentToAllIcon
      },
      {
        title: 'Changelog',
        href: '/changelog',
        icon: ListIcon,
        label: () => <Label color={colors.blue['500']}>v1.3.0</Label>
      }      
    ]
  }
];