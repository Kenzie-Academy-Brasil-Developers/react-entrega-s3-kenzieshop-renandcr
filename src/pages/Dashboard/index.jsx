import Card from "../../components/Card/index";
import DisplayCardSectionStyles from "./styled";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const products = useSelector((state) => state.products);

  return (
    <DisplayCardSectionStyles>
      <ul>
        {products.map((current, index) => (
          <Card key={index} current={current} />
        ))}
      </ul>
    </DisplayCardSectionStyles>
  );
};

export default Dashboard;
