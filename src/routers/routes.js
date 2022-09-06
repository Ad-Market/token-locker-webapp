import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import Uniswapv2 from "../themes/Uniswapv2";
import LockUniswapLP from "../themes/LockUniswapLP";
import WithdrawUniswapLP from "../themes/WithdrawUniswapLP";
import WithdrawPancakeswapLP from "../themes/WithdrawPancakeswapLP";
import LockPancakeLP from "../themes/LockPancakeLP";
import Pancakev2 from "../themes/Pancakev2";
import TokenLock from "../themes/TokenLock";
import tokenMaker from "../themes/tokenMaker";
import ExploreTwo from "../themes/explore-two";
import ExploreThree from "../themes/explore-three";
import ExploreFour from "../themes/explore-four";
import Auctions from "../themes/auctions";
import Activity from "../themes/activity";
import Blog from "../themes/blog";
import BlogSingle from "../themes/blog-single";
import HelpCenter from "../themes/help-center";
import Authors from "../themes/authors";
import Author from "../themes/author";
import WalletConnect from "../themes/wallet-connect";
import Create from "../themes/create";
import Login from "../themes/login";
import Signup from "../themes/signup";
import Contact from "../themes/contact";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne} />
            <Route exact path="/uniswapv2" component={Uniswapv2} />
            <Route exact path="/Lock-UniswapLP" component={LockUniswapLP} />
            <Route exact path="/Withdraw-UniswapLP" component={WithdrawUniswapLP} />
            <Route exact path="/Withdraw-PancakeswapLP" component={WithdrawPancakeswapLP} />
            <Route exact path="/pancakev2" component={Pancakev2} />
            <Route exact path="/Lock-PancakeLP" component={LockPancakeLP} />
            <Route exact path="/tokenLock" component={TokenLock} />
            <Route exact path="/token-maker" component={tokenMaker} />
            <Route exact path="/explore-2" component={ExploreTwo} />
            <Route exact path="/explore-3" component={ExploreThree} />
            <Route exact path="/explore-4" component={ExploreFour} />
            <Route exact path="/auctions" component={Auctions} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog-single" component={BlogSingle} />
            <Route exact path="/help-center" component={HelpCenter} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/author" component={Author} />
            <Route exact path="/wallet-connect" component={WalletConnect} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;