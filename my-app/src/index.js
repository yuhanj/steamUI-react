import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Dropdown, Image, Icon, Grid, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  handleInstall = () => {
    console.log('Downloading...');
  };

  render() {
    return (
        <div>
          <Menu id='topmenu'>
            <Container>
              <Menu.Item>
                <Image width='170px'
                       src="https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016"/>
              </Menu.Item>

              <Menu.Item>
                <Dropdown text='STORE' icon={null}>
                  <Dropdown.Menu className='top dropdown'>
                    <Dropdown.Item text='FEATURED'/>
                    <Dropdown.Item text='EXPLORE'/>
                    <Dropdown.Item text='CURATORS'/>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>

              <Menu.Item>
                <Dropdown text='COMMUNITY' icon={null}>
                  <Dropdown.Menu className='top dropdown'>
                    <Dropdown.Item text='HOME'/>
                    <Dropdown.Item text='DISCUSSIONS'/>
                    <Dropdown.Item text='WORKSHOP'/>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>

              <Menu.Item>
                <div className='text'>ABOUT</div>
              </Menu.Item>

              <Menu.Item>
                <div className='text'>SUPPORT</div>
              </Menu.Item>

              <Menu.Item position='right'>
                <Button className='install label' onClick={this.handleInstall}>
                  <Icon name='download'/> Install Steam
                </Button>
              </Menu.Item>

              <Menu.Item>
                <div className='text'>login</div>
              </Menu.Item>

              <Menu.Item>
                <div className='text'>|</div>
              </Menu.Item>

              <Menu.Item>
                <Dropdown text='language' icon='inverted dropdown'>
                  <Dropdown.Menu className='top dropdown'>
                    <Dropdown.Item text='简体中文(Simplified Chinese)'/>
                    <Dropdown.Item text='日本語(Japanese)'/>
                    <Dropdown.Item text='🦜🦆🍉🐛(Bird Language)'/>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>


            </Container>
          </Menu>
        </div>
    );
  }
}

class Middle extends React.Component {
  render() {

    return (
        <div className="middle-background">
          <Grid>
            <Grid.Column width={4}></Grid.Column>

            <Grid.Column width={10}>
              <Menu className='navbar'>

                <Menu.Item>
                  <Dropdown text={<div className='md text'>Your store</div>} icon='inverted dropdown'>
                    <Dropdown.Menu className='navbar'>
                      <Dropdown.Item>
                        <div className='md text'>Store Home</div>
                      </Dropdown.Item>
                      <hr/>
                      <Dropdown.Item>
                        <div className='md text'>Recently viewed</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className='md text'>Snacks</div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>

                <Menu.Item>
                  <Dropdown text={<div className='md text'>Game</div>} icon='inverted dropdown'>
                    <Dropdown.Menu className='navbar'>
                      <Dropdown.Item>
                        <div className='md text'>Programmer Simulator</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className='md text'>Overload</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className='md text'>Underflow</div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>

                <Menu.Item>
                  <Dropdown text={<div className='md text'>Software</div>} icon='inverted dropdown'>
                    <Dropdown.Menu className='navbar'>
                      <Dropdown.Item>
                        <div className='md text'>Reaction</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className='md text'>Semanic Union</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className='md text'>DumbJ</div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>

                <Menu.Item>
                  <Dropdown text={<div className='md text'>Hardware</div>} icon='inverted dropdown'>
                    <Dropdown.Menu className='navbar'>
                      <Dropdown.Item>
                        <div className='md text'>Turbo</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className='md text'>Chair</div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className='md text'>iPhone8848</div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>

                <Menu.Item>
                  <div className='md text'>News</div>
                </Menu.Item>
                <Menu.Item>
                  <div className='md text'>Steam Labs</div>
                </Menu.Item>
                <Menu.Item position='right'>
                  <Input transparent icon='search' type="text" placeholder="search the store"/>
                </Menu.Item>


              </Menu>
            </Grid.Column>

            <Grid.Column width={2}></Grid.Column>
          </Grid>
        </div>
    );
  }
}

class Bottom extends React.Component {
  render() {
    return (
        <Grid>

          <Grid.Column width={1}></Grid.Column>

          <Grid.Column width={3}>

            <Menu vertical text>
              <Menu.Item>
                <Image src="https://steamstore-a.akamaihd.net/public/images//gift/steamcards_promo_02.png"/>
              </Menu.Item>

              <Menu.Item>
                <div className="text">GIFT CARDS</div>
              </Menu.Item>

              <Menu.Item>
                <div className="blue text">Now Available on Steam</div>
              </Menu.Item>

              <Menu.Item>
                <div className="text">RECOMMENDED</div>
              </Menu.Item>

              <Menu.Item>
                <Icon name='users' color='blue'/>
                <a className="blue text" href='#'>By friends</a>
              </Menu.Item>

              <Menu.Item>
                <Icon name='tag' color='blue'/>
                <a className="blue text" href='#'>Tags</a>
              </Menu.Item>

              <Menu.Item>
                <div className="text">DISCOVERY QUEUES</div>
              </Menu.Item>

              <Menu.Item>
                <Icon name='wechat' color='blue'/>
                <a className="blue text" href='#'>Recommandations</a>
              </Menu.Item>
              <Menu.Item>
                <Icon name='cart plus' color='blue'/>
                <a className="blue text" href='#'>New Releases</a>
              </Menu.Item>


            </Menu>


          </Grid.Column>


          <Grid.Column width={12}>

            <Grid.Row style={{ paddingTop: 20, paddingBottom: 20 }}>
              <div className="text">FEATURED & RECOMMENDED</div>
            </Grid.Row>
            <Grid.Row>
              <Image src='life-saver.jpg' width="90%"/>
            </Grid.Row>

          </Grid.Column>
        </Grid>
    );
  }
}

class Steam extends React.Component {
  render() {
    return (
        <div className='steam body'>
        <TopMenu/>
        <Middle/>
        <Bottom/>
        </div>
    );
  }
}

ReactDOM.render(
    <Steam/>
    , document.getElementById('root'));