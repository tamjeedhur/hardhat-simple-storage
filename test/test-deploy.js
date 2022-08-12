const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", async () => {
    let simpleStorageFactory, simpleStorage

    beforeEach(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")

        simpleStorage = await simpleStorageFactory.deploy()
    })

    it("Should start with a favourite number of 0", async () => {
        const currentValue = await simpleStorage.retreive()
        const expectedValue = "0"

        assert.equal(currentValue.toString(), expectedValue)
    })

    it("Should update value of favourite numnber", async () => {
        const expectedValue = "7"

        await simpleStorage.store(expectedValue)

        const updatesValue = await simpleStorage.retreive()

        assert.equal(updatesValue.toString(), expectedValue)
    })
})
