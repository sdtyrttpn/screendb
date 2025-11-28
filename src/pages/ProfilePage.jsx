import { useState } from "react";
import PageHeader from "../components/HeaderForPages";

export default function WatchListPage() {
  const [settingType, setSettingType] = useState("general");

  function handleSettingType(type) {
    setSettingType(type);
  }

  return (
    <>
      <PageHeader
        title={
          <div className="text-center">
            <span className="text-yellow-400">My</span>
            <br />
            Profile
          </div>
        }
      />
      <div className="container mx-auto">
        <div className="p-6 rounded-xl flex flex-col items-center gap-6 lg:flex-row">
          <ul id="settingList" className="w-full max-w-100">
            <li
              className={`border-b text-lg border-neutral-600 p-2 font-semibold cursor-pointer ${
                settingType === "general" ? "bg-neutral-700" : "hover:bg-neutral-700"
              }`}
              onClick={() => handleSettingType("general")}
            >
              General
            </li>

            <li
              className={`border-b text-lg border-neutral-600 p-2 font-semibold cursor-pointer ${
                settingType === "appearance" ? "bg-neutral-700" : "hover:bg-neutral-700"
              }`}
              onClick={() => handleSettingType("appearance")}
            >
              Appearance
            </li>

            <li
              className={`border-b text-lg border-neutral-600 p-2 font-semibold cursor-pointer ${
                settingType === "language" ? "bg-neutral-700" : "hover:bg-neutral-700"
              }`}
              onClick={() => handleSettingType("language")}
            >
              Language & Region
            </li>

            <li
              className={`border-b text-lg border-neutral-600 p-2 font-semibold cursor-pointer ${
                settingType === "notifications" ? "bg-neutral-700" : "hover:bg-neutral-700"
              }`}
              onClick={() => handleSettingType("notifications")}
            >
              Notifications
            </li>

            <li
              className={`border-b text-lg border-neutral-600 p-2 font-semibold cursor-pointer ${
                settingType === "privacy" ? "bg-neutral-700" : "hover:bg-neutral-700"
              }`}
              onClick={() => handleSettingType("privacy")}
            >
              Privacy
            </li>
          </ul>

          {settingType === "general" && (
            <div className="flex items-center justify-center w-full min-h-50 text-center">
              <h1 className="text-3xl font-bold lg:text-6xl">General Settings</h1>
            </div>
          )}

          {settingType === "appearance" && (
            <div className="flex items-center justify-center w-full min-h-50 text-center">
              <h1 className="text-3xl font-bold lg:text-6xl">Appearance Settings</h1>
            </div>
          )}

          {settingType === "language" && (
            <div className="flex items-center justify-center w-full min-h-50 text-center">
              <h1 className="text-3xl font-bold lg:text-6xl">Language & Region Settings</h1>
            </div>
          )}

          {settingType === "notifications" && (
            <div className="flex items-center justify-center w-full min-h-50 text-center">
              <h1 className="text-3xl font-bold lg:text-6xl">Notifications Settings</h1>
            </div>
          )}

          {settingType === "privacy" && (
            <div className="flex items-center justify-center w-full min-h-50 text-center">
              <h1 className="text-3xl font-bold lg:text-6xl">Privacy Settings</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
