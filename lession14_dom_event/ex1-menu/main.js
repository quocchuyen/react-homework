const shallowMenu = [{
    title: 'Dashboard',
    link: '/dashboard',
    icon: 'fas fa-tachometer-alt',
    children: [{
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    icon :'fa fa-truck',
    children: [{
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    icon :'fas fa-envelope',
    children: [{
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    icon :'fas fa-user-friends',
    children: [{
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    icon :'fas fa-cog',
    children: [{
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]
window.onload = () => {
  const box = document.getElementById('box')
  const createMenu = (parent, arr) => {
    arr.forEach(child => {
      const div = document.createElement('div')
      const li = document.createElement('li')
      const a = document.createElement('a')
      if (child.icon) {
        const i = document.createElement('i')
        i.classList = child.icon
        div.appendChild(i)
      }
      a.innerHTML = child.title
      a.href = child.link
      li.appendChild(a)
      div.appendChild(li)
      if (child.children) {
        const ul = document.createElement('ul')
        createMenu(ul, child.children)
        div.appendChild(ul)
      }
      parent.appendChild(div)
    })
  }
  const parent = document.createElement('ul')
  createMenu(parent, shallowMenu)
  box.appendChild(parent)
  const parentMenu = document.querySelectorAll('#box ul  div')
  const childMenu = document.querySelectorAll('#box ul div ul')
  const [dashBoard, , , , , sales, , , , , messages, , , , , users, , , , , settings] = parentMenu
  const parentMenuCompact = [dashBoard, sales, messages, users, settings]
  const toggleClick = (menu, iconArrow) => {
    const current = menu.style.display
    const next = current === 'none' || !current ? 'block' : 'none'
    const currentArrow = iconArrow.className
    const nextArrow = currentArrow === 'fas fa-chevron-right' || !currentArrow ? 'fas fa-chevron-down' : 'fas fa-chevron-right'
    next === 'none' ? iconArrow.style.color = '#fff' : iconArrow.style.color = '#14a3f9'
    menu.style.display = next
    iconArrow.className = nextArrow
  }
  for (let i = 0; i < parentMenuCompact.length; i++) {
    const iconArrow = document.createElement('i')
    iconArrow.classList.add('fas')
    iconArrow.classList.add('fa-chevron-right')
    parentMenuCompact[i].appendChild(iconArrow)
    parentMenuCompact[i].addEventListener('click', () => {
      toggleClick(childMenu[i], iconArrow)
    })
  }
}
