import styled from "styled-components";
import { DateTime, Interval } from "luxon";
import { ReactComponent as Clock } from "../../assets/icon-clock.svg";
import { ReactComponent as Ethereum } from "../../assets/icon-ethereum.svg";
import { ReactComponent as View } from "../../assets/icon-view.svg";
import timeRemainingToString from "../../utils/timeRemainingToString";
import ms from "../../utils/ms";

interface Creator {
  src: string;
  name: string;
}

interface Props {
  name: string;
  description: string;
  src: string;
  alt: string;
  price: number;
  currency: string;
  auctionEnd: DateTime;
  creator: Creator;
}

const NFTPreviewCard = ({
  name,
  description,
  src,
  alt,
  price,
  currency,
  auctionEnd,
  creator
}: Props) => {
  const now = DateTime.now();
  const later = DateTime.now().plus({ days: 3 });
  const interval = Interval.fromDateTimes(now, later);
  console.log({
    now,
    later,
    interval
  });
  return (
    <Wrapper>
      <ImageContainer>
        <Overlay>
          <View />
        </Overlay>
        <img src={src} alt={alt} />
      </ImageContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Auction>
        <Price>
          <Ethereum />
          <Cost>
            {price} {currency}
          </Cost>
        </Price>
        <AuctionEnd>
          <Clock />
          <span>3 days left</span>
        </AuctionEnd>
      </Auction>
      <CreatedBy>
        <img src={creator.src} alt={creator.name} />
        <p>
          Creation of <Username>{creator.name}</Username>
        </p>
      </CreatedBy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 12px;
  padding: 24px;
  width: 350px;
  background: var(--veryDarkBlue-cardbg);
  @media (max-width: 375px) {
    width: 325px;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  & > img {
    display: block;
    line-height: 0;
    width: 100%;
    border-radius: 8px;
  }
`;
const Overlay = styled.div`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  place-items: center;
  line-height: 0;
  opacity: 0;
  &:hover {
    opacity: 1;
    background: hsla(178, 100%, 50%, 0.4);
  }
`;
const Title = styled.h3`
  color: var(--white);
  font-weight: var(--fw-regular);
  margin-top: 32px;
  cursor: pointer;
  &:hover {
    color: var(--cyan);
  }
`;
const Description = styled.p`
  color: var(--softBlue);
  font-weight: var(--fw-thin);
  margin-top: 24px;
  line-height: 1.5;
`;
const Auction = styled.div`
  margin-top: 24px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid;
  border-color: var(--veryDarkBlue-line);
`;
const Price = styled.div`
  display: flex;
  align-items: center;
`;
const Cost = styled.span`
  margin-left: 6px;
  color: var(--cyan);
  display: flex;
  align-items: center;
`;
const AuctionEnd = styled.span`
  color: var(--softBlue);
  display: flex;
  align-items: center;
  & > span {
    margin-left: 8px;
  }
`;
const CreatedBy = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--softBlue);
  font-weight: var(--fw-thin);
  img {
    height: 32px;
    border-radius: 50%;
    border: 1px solid white;
  }
  @media (max-width: 375px) {
    margin-bottom: 0;
  }
`;
const Username = styled.span`
  color: var(--white);
  cursor: pointer;
  &:hover {
    color: var(--cyan);
  }
`;

export default NFTPreviewCard;
