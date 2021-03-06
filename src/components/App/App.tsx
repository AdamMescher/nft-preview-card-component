import styled from "styled-components";
import NFTPreviewCard from "../NFTPreviewCard";
import { DateTime } from "luxon";
import avatar from "./assets/image-avatar.png";
import art from "./assets/image-equilibrium.jpg";

const threeDaysFromNow = DateTime.now().plus({ days: 3 });

const nft = {
  name: "Equilibrium #3429",
  description: "Our Equilibrium collection promotes balance and calm.",
  src: art,
  alt:
    "translucent cube with red light filtering through on a blue background standing on one corner",
  price: 0.041,
  currency: "ETH",
  auctionEnd: threeDaysFromNow,
  creator: {
    name: "Jules Wyvern",
    src: avatar
  }
};

const App = () => {
  return (
    <Wrapper>
      <NFTPreviewCard
        name={nft.name}
        description={nft.description}
        src={nft.src}
        alt={nft.alt}
        price={nft.price}
        currency={nft.currency}
        auctionEnd={nft.auctionEnd}
        creator={nft.creator}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  background: var(--veryDarkBlue-mainbg);
`;

export default App;
