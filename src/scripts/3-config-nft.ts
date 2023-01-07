import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// 先ほどメモして残していた editionDrop のコントラクトアドレスをこちらに記載してください
const editionDrop = sdk.getContract(
  "0xa14Dd778935b07e1712EC606827D37470F338486",
  "edition-drop"
);

(async () => {
  try {
    await (
      await editionDrop
    ).createBatch([
      {
        name: "Member's Limited item",
        description: "keitDAO にアクセスすることができる限定アイテムです",
        image: readFileSync("src/scripts/assets/icon.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
