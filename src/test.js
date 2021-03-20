import React from 'react'
import styled from 'styled-components'
import Username from '../Username'
import Avatar from '../Avatar'
import Picture from '../Picture'
import Caption from '../Caption'

const FakeData = [
  {
    name: 'Patick Bruel',
    urlAvatar:
      'https://www.web-soluces.net/webmaster/avatar/AvatarMakerCom-Garcon.png%27/%3E',
    urlImage:
      'https://fr.davidsuzuki.org/wp-content/uploads/sites/3/2013/05/connecter-nature.jpg%27%3E',
    captionName: 'Jean Claude',
    captionComment: "Bonjour c'est beau"
  },
  {
    name: 'Patick Bosso',
    urlAvatar:
      'https://www.web-soluces.net/webmaster/avatar/AvatarMakerCom-Garcon.png%27/%3E',
    urlImage:
      'https://fr.davidsuzuki.org/wp-content/uploads/sites/3/2013/05/connecter-nature.jpg%27%3E',
    captionName: 'Jean Claude Vandamme',
    captionComment: "y'a des oiseaux"
  }
]
const Post = props => {
  return (
    <div>
      {FakeData.map(data => {
        ;<PostContainer>
          <div>
            <Username name='Alexandre' />
            <Avatar url='https://www.web-soluces.net/webmaster/avatar/AvatarMakerCom-Garcon.png%27/%3E' />
          </div>
          <div>
            <Picture url='https://fr.davidsuzuki.org/wp-content/uploads/sites/3/2013/05/connecter-nature.jpg%27%3E'></Picture>
            <Caption nom={props.nom} caption={props.caption} />
          </div>
        </PostContainer>
      })}
    </div>
  )
}

const PostImg = styled.img`
  align-items: center;
  padding: 20px;
  widh: 100px;
`

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 500px;
  border: 1px solid lightgray;
  margin-bottom: 45px;
`

export default Post
