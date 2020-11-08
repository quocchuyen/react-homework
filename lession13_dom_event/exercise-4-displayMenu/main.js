const menu = [
  {
      name: 'Home',
      children: [
          {
              name: 'Home 1',
              children: [
                  {
                      name: 'Home 1.1',
                      children: [
                          { name: 'Home 1.1.1' }
                      ]
                  },
                  {
                      name: 'Home 1.2',
                      children: [
                          { name: 'Home 1.2.1' }
                      ]
                  }
              ]
          },
          {
              name: 'Home 2',
              children: [
                  {
                      name: 'Home 2.1'
                  }
              ]
          },
          {
              name: 'Home 3',
              children: [
                  {
                      name: 'Home 3.1'
                  }
              ]
          }
      ]
  },
  {
      name: 'About',
      children: [
          {
              name: 'About 1',
              children: [
                  {
                      name: 'About 1.1',
                      children: [
                          { name: 'About 1.1.1' }
                      ]
                  },
                  {
                      name: 'About 1.2',
                      children: [
                          {
                              name: 'About 1.2.1',
                              children: [
                                  { name: 'About 1.2.1.1' },
                                  { name: 'About 1.2.1.2' },
                                  { name: 'About 1.2.1.3' }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              name: 'Home 2',
              children: [
                  {
                      name: 'Home 2.1'
                  }
              ]
          }
      ]
  }
]
const [
  {
      name: home,
      children: [
          {
              name: home1,
              children: [
                  {
                      name: home1_1,
                      children: [
                          { name: home1_1_1 }
                      ]
                  },
                  {
                      name: home1_2,
                      children: [
                          { name: home1_2_1 }
                      ]
                  }
              ]
          },
          {
              name: home2,
              children: [
                  {
                      name: home2_1
                  }
              ]
          },
          {
              name: home3,
              children: [
                  {
                      name: home3_1
                  }
              ]
          }
      ]
  },
  {
      name: about,
      children: [
          {
              name: about1,
              children: [
                  {
                      name: about1_1,
                      children: [
                          { name: about1_1_1 }
                      ]
                  },
                  {
                      name: about1_2,
                      children: [
                          {
                              name: about1_2_1,
                              children: [
                                  { name: about1_2_1_1 },
                                  { name: about1_2_1_2 },
                                  { name: about1_2_1_3 }
                              ]
                          }
                      ]
                  }
              ]
          },
          {
              name: about_home2,
              children: [
                  {
                      name: about_home2_1
                  }
              ]
          }
      ]
  }
] = menu
const displayMenu = document.getElementById('menu')
const showMenu = menu => {
  displayMenu.innerHTML = `
  <ul>
  <li id ="home">  ${home}
      <ul>
          <li id="home1">${home1} 
              <ul class="sub-menu">
                  <li id="home1-1">${home1_1}
                      <ul >
                          <li>${home1_1_1}</li>
                      </ul>
                  </li>
                  <li id="home1-2">${home1_2}
                      <ul>
                          <li>${home1_2_1}</li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li id="home2"> ${home2}
              <ul class="sub-menu">
                  <li>${home2_1}</li>
              </ul>
          </li>
          <li id="home3">${home3}
              <ul class="sub-menu">
                  <li>${home3_1}</li>
              </ul>
          </li>
      </ul>
  </li>
  <li id ="about">${about}
      <ul>
          <li id="about1">${about1}
              <ul class="sub-menu">
                  <li id="about1-1">${about1_1}
                      <ul>
                          <li>${about1_1_1}</li>
                      </ul>
                  </li>
                  <li id="about1-2">${about1_2}
                      <ul>
                          <li id="about1-2-1">${about1_2_1}
                              <ul>
                                  <li>${about1_2_1_1}</li>
                                  <li>${about1_2_1_2}</li>
                                  <li>${about1_2_1_3}</li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li id="about-home2">${about_home2}
              <ul class="sub-menu">
                  <li>${about_home2_1}</li>
              </ul>
          </li>
      </ul>
  </li>
</ul>`
}
showMenu(menu)
