"use client";
import React, { useState, useEffect } from "react";
import datesExports from "./dates/dates";

// Custom hook for countdown timer
function useCountdownTimer(targetDate: Date) {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    days: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const msUntilTargetDate = targetDate.getTime() - now.getTime();
      const seconds = Math.floor((msUntilTargetDate / 1000) % 60);
      const minutes = Math.floor((msUntilTargetDate / 1000 / 60) % 60);
      const hours = Math.floor((msUntilTargetDate / (1000 * 60 * 60)) % 24);
      const days = Math.floor(msUntilTargetDate / (1000 * 60 * 60 * 24));

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return countdown;
}

export default function Home() {
  // Dates
  const PassoverDate = new Date(datesExports.PasssoverDate);
  const LastSupperDate = new Date(datesExports.LastSupperDate);
  const GetsemanePrayerDate = new Date(datesExports.GetsemanePrayerDate);
  const JesusBetrayalDate = new Date(datesExports.BurialDate);
  const HebrewTrailDate = new Date(datesExports.HebrewTrail);

  // Hooks for countdown timers
  const passoverCountdown = useCountdownTimer(PassoverDate);
  const lastSupperCountdown = useCountdownTimer(LastSupperDate);
  const getsemaneCountdown = useCountdownTimer(GetsemanePrayerDate);
  const betrayalCountdown = useCountdownTimer(JesusBetrayalDate);
  const hebrewTrialCountdown = useCountdownTimer(HebrewTrailDate);

  // Current time
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // JSX
  return (
    <main>
      <div className="">Current time is: {time}</div>
      <div className="">
        Time until Passover is: {passoverCountdown.days} days,{" "}
        {passoverCountdown.hours} hours, {passoverCountdown.minutes} minutes,{" "}
        {passoverCountdown.seconds} seconds
      </div>
      <div className="">
        Time until Last Supper is: {lastSupperCountdown.days} days,{" "}
        {lastSupperCountdown.hours} hours, {lastSupperCountdown.minutes}{" "}
        minutes, {lastSupperCountdown.seconds} seconds
      </div>
      <div className="">
        Time until Getsemane is: {getsemaneCountdown.days} days,{" "}
        {getsemaneCountdown.hours} hours, {getsemaneCountdown.minutes} minutes,{" "}
        {getsemaneCountdown.seconds} seconds
      </div>
      <div className="">
        Time until Jesus is betrayed is: {betrayalCountdown.days} days,{" "}
        {betrayalCountdown.hours} hours, {betrayalCountdown.minutes} minutes,{" "}
        {betrayalCountdown.seconds} seconds
      </div>
      <div className="">
        Time until Hebrew Trial is: {hebrewTrialCountdown.days} days,{" "}
        {hebrewTrialCountdown.hours} hours, {hebrewTrialCountdown.minutes}{" "}
        minutes, {hebrewTrialCountdown.seconds} seconds
      </div>
    </main>
  );
}
