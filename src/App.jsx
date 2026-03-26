import React from "react";
// import customizImg from "./assets/customize-card.png";
// import schedulingImg from "./assets/scheduling-card.png";
// import walletImg from "./assets/wallet-card.png";
// import inboxImg from "./assets/inbox-card.png";
// import sendGiftsImg from "./assets/send-gifts-card.png";
// import remindersImg from "./assets/reminders-card.png";
import "./index.css";

const App = () => {
  return (
    <div className="grid-container vh-100 w-100">
      <div
        className="grid-item bg-purple-300 flex-column"
        style={{ gridArea: "box-1" }}
      >
        <h2 className="text-purple-900">Customization</h2>
        <p className="text-purple-900">
          Customize your experience to fit your needs. Choose themes and layout
          settings in seconds.
        </p>
      </div>
      <div
        className="grid-item bg-pink-400 flex-row"
        style={{ gridArea: "box-2" }}
      >
        <div className="mt-auto max-w-80">
          <h2 className="text-pink-900">Scheduling</h2>
          <p className="text-pink-900">
            Plan and organize your time effectively. Set reminders and sync
            across all devices.
          </p>
        </div>
      </div>
      <div
        className="grid-item bg-lime-200 flex-column"
        style={{ gridArea: "box-3" }}
      >
        <h2 className="text-lime-900">Wallet</h2>
        <p className="text-lime-900">
          Manage your finances with ease. Track expenses and set budgets.
        </p>
      </div>
      <div
        className="grid-item bg-yellow-200 flex-column"
        style={{ gridArea: "box-4" }}
      >
        <h2 className="text-yellow-900">Inbox</h2>
        <p className="text-yellow-900">
          Stay organized with your messages. Filter and search conversations
          easily.
        </p>
      </div>
      <div
        className="grid-item bg-orange-300 flex-column"
        style={{ gridArea: "box-5" }}
      >
        <div className="max-w-80">
          <h2 className="text-orange-900">Send Gifts</h2>
          <p className="text-orange-900">
            Give the perfect gift every time. Browse curated selections for
            every occasion.
          </p>
        </div>
      </div>
      <div
        className="grid-item bg-gray-300 flex-column"
        style={{ gridArea: "box-6" }}
      >
        <h2 className="text-gray-900">Reminders</h2>
        <p className="text-gray-900">
          Never forget an important date. Get smart notifications and recurring
          reminders.
        </p>
      </div>
    </div>
  );
};

export default App;
