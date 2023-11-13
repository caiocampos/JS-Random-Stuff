import { PageParams, PageProps, generateParams } from "../types";

const LoginPage = ({ params }: PageProps) => {
  return (
    <div>
      <p>country: {params.country}</p>
      <p>language: {params.language}</p>
    </div>
  );
};

export const generateStaticParams = async (): Promise<PageParams[]> =>
  generateParams();

export default LoginPage;
