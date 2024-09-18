import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Proshop",
  description: "We sell best products for cheap",
  keywords: "electronics,buy electronics , cheap electronics",
};

export default Meta;
