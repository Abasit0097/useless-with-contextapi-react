pragma solidity ^0.8.0;

//Version 3 with reveal and royality
//changes of royality and reveal on rinkeby 0x74a99aef15b7dfa92ab367dc60ed1f62125afa87
//contract address deployed on ropsten 0x900F8F65c60fBe01f89cd07C6d82347743EE125b

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract useLessToken is ERC721Enumerable, Ownable {
  using Strings for uint256;

  //mapping for whitelisted buyers
  mapping(address => bool) whitelist;

  string baseURI;
  string baseExtension;
  uint256 public cost = 1 ether;
  uint256 public maxSupply = 100;
  uint256 public maxMintAmount = 5;
  bool public paused = true;
  bool public revaled = false;
  uint releaseTime = block.timestamp + 0 days; //time is only 4 minutes to check working
  uint salesEndTime = block.timestamp + 365 days;

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI,
    uint256 _mintAmount
  ) 
  ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);

    uint256 supply = totalSupply(); 

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(msg.sender, supply + i);
    }   
    
  }

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function mint(uint256 _mintAmount) public payable {
    uint256 supply = totalSupply();
    require(!paused, "contract is paused");
    require(_mintAmount > 0);
    require(_mintAmount <= maxMintAmount, "max mint quantity reached");
    require(supply + _mintAmount <= maxSupply, "reached to max supply");

   //whitelisted buyers are exempt of sale start and end time 
    if (whitelist[msg.sender] == false) {
       require(block.timestamp >= releaseTime && block.timestamp <= salesEndTime,
     "sale time not yet started, or sale time period ended");

    }

  //owner can mint without paying cost
    if (msg.sender != owner()) {
      require(msg.value >= cost * _mintAmount, "Ether Amount is not correct");
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(msg.sender, supply + i);
    }
  }

  function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    require(revaled == true, "uri not revaled yet");
    
    //concatination of tokenid and URI
    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension, ".json"))
        : "";
  }

    //buyer can buy already minted tokens
     function buyMintedToken(uint256 tokenId) public payable{
     uint _buyAmount = 1;
     require(!paused, "contract is paused");
     require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
     require(msg.sender != owner(), "owner can not be buyer");
     require(msg.value >= cost * _buyAmount, "Ether Amount is not correct");


      _safeTransfer(owner(), msg.sender, tokenId, "" );
  }


  //only owner

  //cost can be adjusted
  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }


  //adjustment of amount of token that can be minted
  function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
  }
  
  //new token URI can be updated
  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  //to pause and unpause contract
  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

  //withdraw funds from contract
  function withdraw() public payable onlyOwner {
        //royality payment to dev address @ 5%
        address dev = 0xdD870fA1b7C4700F2BD7f44238821C26f7392148; 
        payable(dev).transfer((address(this).balance)/100*5);
        
        //remaining balance transfered to owner address @ 95%
        payable(owner()).transfer(address(this).balance);
    
  }

  //for checking contract balance
  function contractBalance() public view onlyOwner returns(uint) {
      return address(this).balance;
  }


  //addition of whitelisted buyers
  function addToWhitelist(address whitelists) external onlyOwner {
      whitelist[whitelists] = true;
  }

  //extend SaleEnd time
  function extendSaleTime(uint Days) external onlyOwner {
        require(block.timestamp > salesEndTime, "Sale time not finished yet!");
        salesEndTime = block.timestamp + Days * 1 days;
  }


  // function to reveal token uri
  function setReval(bool _reveal) external onlyOwner {
    revaled = _reveal;
  }
}

//"SPDX-License-Identifier: UNLICENSED"