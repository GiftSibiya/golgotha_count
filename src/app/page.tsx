"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  /// Dates

  // dates are in the format:--- ( YYYY,MM,DD, HH, MM, SS)
  const LastSupperDate = new Date(2024, 2, 28, 18, 0, 0, 0); // Wednesday
  const PasssoverDate = new Date(2024, 2, 29, 13, 0, 0, 0); // Thursday

  // Getsemane prayer
  // Betrayed and Arrest by soldiers
  // Trial taken to Annas and Caiaphas 4-6AM
  // Peter denies Jesus
  // Jesus trial Before Pilate
  // Barabbas is frees
  // Jesus Tortured
  // Jesus Carries Cross
  // Jesus Cruciffied 9pm
  // Jesus Mocked and Soldiers mock him
  // Jesus Speask to theif and John
  // Darkness over the land
  // Jesus Dies 3PM
  // Soldiers pierce him 3-6pm
  // Joseph claims his body
  // Jesus tomb sealed
  // Jesus Ressurects Saturday sunset
  // Jesus Ascends

  // Hooks
  // Current Day
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    })
  );

  /// Countdowns

  // Passover Countdown
  const [passoverCountdown, setPassoverCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    days: 0,
  });

  // Last Supper Countdown
  const [lastSupperCountdown, setLastSupperCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    days: 0,
  });

  ///---

  // Functions

  // Returns the time after every second.
  useEffect(() => {
    const intervalId = setInterval(() => {
      const countdownTime = getTimeUntilPassoverDate();
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        })
      );
      setPassoverCountdown(countdownTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Returns the time of last supper in 1 sec interval.
  useEffect(() => {
    const intervalId = setInterval(() => {
      const countdownTime = getTimeUntilLastSupper();
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        })
      );
      setLastSupperCountdown(countdownTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Time until Passover Calculation
  function getTimeUntilPassoverDate() {
    const targetDate = new Date(PasssoverDate);
    const now = new Date();
    const msUntilTargetDate = targetDate.getTime() - now.getTime();
    const seconds = Math.floor((msUntilTargetDate / 1000) % 60);
    const minutes = Math.floor((msUntilTargetDate / 1000 / 60) % 60);
    const hours = Math.floor((msUntilTargetDate / (1000 * 60 * 60)) % 24);
    const days = Math.floor(msUntilTargetDate / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  //
  function getTimeUntilLastSupper() {
    const targetDate = new Date(LastSupperDate);
    const now = new Date();
    const msUntilTargetDate = targetDate.getTime() - now.getTime();
    const seconds = Math.floor((msUntilTargetDate / 1000) % 60);
    const minutes = Math.floor((msUntilTargetDate / 1000 / 60) % 60);
    const hours = Math.floor((msUntilTargetDate / (1000 * 60 * 60)) % 24);
    const days = Math.floor(msUntilTargetDate / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

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
    </main>
  );
}
