import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

export function Contact() {
  const params = useParams();
  const data = useLoaderData();

  const navigate = useNavigate();

  return (
    <>
      <Link to="/">Root</Link>
      <button onClick={() => navigate('/')}>Root</button>
    </>
  );
}
