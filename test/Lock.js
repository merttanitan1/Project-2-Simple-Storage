const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  it("Should set address and number", async function() {
    [adr1, adr2] = await ethers.getSigners();

    const Storage = await ethers.getContractFactory("SimpleStorage");
    const storage = await Storage.deploy();

    await storage.setAll(adr1.address, 50);
    expect(await storage.getNum()).to.equal(50);
    expect(await storage.getAdr()).to.equal(["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"]);

  });
});
