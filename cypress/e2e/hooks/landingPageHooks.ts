export const landingPageCommonHooks = {
    xMigrationBtn: '[data-testid="xMigrationBottomBar"]'        //x button notification
}

export const leftRailHooks = {
    xIconLink: '[aria-label="X"]',      //X icon
    homeLink: '[data-testid="AppTabBar_Home_Link"]',        //home link
    exploreLink: '[data-testid="AppTabBar_Explore_Link"]',      //explore link
    notificationLink: '[data-testid="AppTabBar_Notifications_Link"]',       //notfications
    directMsgLink: '[data-testid="AppTabBar_DirectMessage_Link"]',      //messages
    grokLink: '[aria-label="Grok"]',        //link to grok
    profileLink: '[data-testid="AppTabBar_Profile_Link"]',      //profile link
    moreBtn: '[data-testid="AppTabBar_More_Menu"]',     //more link --> opens a fly-out
    newTweetBtn: '[data-testid="SideNav_NewTweet_Button"]',     //new post/tweet button
    profileBtn: '[data-testid="SideNav_AccountSwitcher_Button"]'        //profile button --> opens accounts fly-out
}

export const mainBlockHooks = {
    forYou: '//*[contains(text(),"For you")]/ancestor::a',      //For you section
    following: '//*[contains(text(),"Following")]/ancestor::a',     //Following section
    /****************************************Create new post hooks********************************************** */
    txtFld: '//*[contains(@data-testid,"tweetTextarea_0RichTextInputContain")]//span/span',     //textbox for post
    whoCanReply: '//*[contains(@aria-label, "reply")]',     //who all can reply to post
    photoVideo: '//*[contains(@aria-label, "Add photos or video")]',        //attach photo or video button
    addgif: '//*[contains(@aria-label, "GIF")]',        //add GIF button
    addPoll: '//*[contains(@aria-label, "poll")]',      //add Poll button
    addEmoji: '//*[contains(@aria-label, "emoji")]',        //add Emoji button
    schedulePost: '//*[contains(@aria-label, "Schedule post")]',        //schedule post button
    location: '//*[contains(@aria-label, "Tag Location")]',     //add/tag location button
    postBtn: '//*[contains(text(), "Post")]/ancestor::button',       //Send post button

    /******************************************Choose who can reply******************************************* */
    accountsYouFollow: '//*[contains(text(), "Accounts you follow")]/ancestor::div[@role="menuitem"]',
}

export const rightRailHooks = {
    searchInput: '[data-testid="SearchBox_Search_Input"]',      //search box
    subscribeToPremiumBtn: '//*[contains(text(),"Subscribe")]/ancestor::a',     //subscribe button for premium
    trendingSection: '//*[contains(text(), "What’s happening")]/ancestor::section',     //What's happening section
    showMoreLinkTrending: '//*[contains(text(), "What’s happening")]/ancestor::section//a',     //show more link in What's happening section
    suggestedPeopleSection: '//*[contains(text(),"Who to follow")]//ancestor::aside',       //suggested people section
    showMoreLinkPeople: '//*[contains(text(), "Show more")]/ancestor::aside',       //show more link in suggested people section
}