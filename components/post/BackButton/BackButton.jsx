import Link from 'next/link'
import styled from 'styled-components'

const BackButton = () => (
  <Button>
    <Link href="/">
      <a>back to list</a>
    </Link>
  </Button>
)

const Button = styled.div`
  color: #9a9a9a;
  display: block;
  max-width: 700px;
  margin: 0 auto 2em auto;
  font-family: "Lato", sans-serif;
  font-size: 16px;

  &:before {
    content: "←";
    display: inline-block;
    position: relative;
    margin-right: 8px;
  }

  a {
    color: #9a9a9a;
  }

  a:hover {
    text-decoration: underline;
  }
`

export default BackButton
