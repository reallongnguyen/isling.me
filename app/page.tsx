'use client';

import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export default function Home() {
  const [targetAge] = useState(70);
  const [birthday] = useState(dayjs('1995-05-06'));
  const [now] = useState(dayjs().startOf('day'));

  const allWeeks = useMemo(() => {
    const weeks = [];
    const numWeek = birthday
      .add(dayjs.duration(targetAge, 'years'))
      .diff(birthday, 'weeks');

    for (let i = 0; i < numWeek; i += 1) {
      weeks.push(i);
    }

    return weeks;
  }, [birthday, targetAge]);

  const curWeek = useMemo(() => {
    return now.diff(birthday, 'weeks');
  }, [now, birthday]);

  const giftWeeks = useMemo(() => {
    const weeks = [];
    const numGiftWeek = Math.max(0, curWeek - allWeeks.length);

    for (let i = 0; i < numGiftWeek; i += 1) {
      weeks.push(i);
    }

    return weeks;
  }, [allWeeks.length, curWeek]);

  return (
    <main className='min-h-screen p-24'>
      <div className='inline-block'>
        {allWeeks.map((week) => (
          <div
            className={`
              w-3 h-3 float-left
              ${week < curWeek ? 'bg-zinc-200 border border-gray-500' : ''}
              ${week >= curWeek ? 'bg-green-400 border border-green-800' : ''}
            `}
            key={week}
          />
        ))}
        {giftWeeks.map((week) => (
          <div
            className='w-3 h-3 float-left bg-blue-400 border border-blue-800'
            key={week}
          />
        ))}
      </div>
    </main>
  );
}
