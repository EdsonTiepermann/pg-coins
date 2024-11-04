import Wallet from "../models/wallet-model.js";
import User from "../models/user-model.js";

export const store = async (req, res) => {
  try {
    const wallet = await Wallet.create(req.body);
    return res.status(201).json(wallet);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const index = async (req, res) => {
  try {
    const wallet = await Wallet.find().exec();
    return res.status(200).json(wallet);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const update = async (req, res) => {
  try {
    const wallet = await Wallet.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    return res.status(200).json(wallet);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const destroy = async (req, res) => {
  try {
    const wallet = await Wallet.findByIdAndDelete(req.params.id).exec();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const verifyWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.wallet_id).exec();
    let walletBalance = wallet.balance;

    // if (walletBalance > req.body.amount) {
    if (walletBalance > 30) {
      trasaction(req.params.user_id);
      console.log("ok");
      return res.status(200).json("Transaction approved");
    } else {
      return res(403).json("Transaction not approved");
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

async function trasaction(user_id) {
  const userWalletData = await User.findById(user_id).exec();
  console.log(userWalletData);
  let constwalletBalance = userWalletData.balance;

}
