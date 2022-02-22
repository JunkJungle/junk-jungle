import Link from 'next/link'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
    Home
    <Link
     href={'/createItem'}
     passHref>
     <Button variant="contained">
        Create Item
     </Button>
  </Link>
  <Link
   href={'/search'}
   passHref>
   <Button variant="contained">
      Search
   </Button>
</Link>
<Link
 href={'/logout'}
 passHref>
 <Button variant="contained">
  Logout
 </Button>
</Link>
    </div>
  )
}
