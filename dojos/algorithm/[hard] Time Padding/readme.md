Abbey is always forgetting friend’s birthdays; she wishes to be notified before the event that she must buy a present. She wants the notifications to be relative to how far away the event is.

Given only a unix time in the future, calculate the time an early notification should be sent. The further away the event the more padding should be added. The function should return a notification time 5 minutes and 5% before the event.

Tips:

Read about the Data object!

Optional: Improve your code to support returning multiple notifications at different thresholds. Output the result in a human readable format.

Output should look like this:

If now is 1st January 2019 an 00:00:00 and the event is 1st January 2019 01:00:00, return a notification time of 1st January 2019 00:52:00.

If now is 1st January 2019 an 00:00:00 and the event is 2nd January 2019 01:00:00, return a notification time of 2nd January 2019 00:37:00.

Your times only need to be approximate.
