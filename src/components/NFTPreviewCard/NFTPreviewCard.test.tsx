import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import NFTPreviewCard from "./NFTPreviewCard";
import { addHours } from "../../utils/addHours";

describe("NFTPreviewCard Component", () => {
  it("Should render without errors", () => {
    const threeDaysFromNow = addHours(72, new Date());
    const nft = {
      name: "nft name goes here",
      description: "nft description goes here",
      src: "/file-path-here.png",
      alt: "alt text goes here",
      price: 1.0567,
      currency: "ETH",
      auctionEnd: threeDaysFromNow.toLocaleDateString(),
      creator: {
        name: "artist name here",
        src: "/file-path-here.svg"
      }
    };
    render(
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
    );
    expect(screen.getByAltText(/alt text goes here/i)).toBeInTheDocument();
    expect(screen.getByText(/nft name goes here/i));
    expect(screen.getByText(/nft description goes here/i));
    expect(screen.getByText(/1.0567 eth/i)).toBeInTheDocument();
    expect(screen.getByAltText(/artist name here/i)).toBeInTheDocument();
    expect(screen.getByText(/artist name here/i)).toBeInTheDocument();
  });
});
