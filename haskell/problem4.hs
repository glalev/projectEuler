
-- A palindromic number reads the same both ways. The largest palindrome made
--  from the product of two 2-digit numbers is 9009 = 91 × 99.
--
-- Find the largest palindrome made from the product of two 3-digit numbers.

toList :: Integer -> [Integer]
toList 0 = []
toList n = n `mod` 10 : toList (n `div` 10)

isPalindrome :: Integer -> Bool
isPalindrome n = toList n == reverse (toList n)

largetsPalindrome :: Integer
largetsPalindrome = maximum [p | x <- [100..999], y <- [x..999], let p = x * y, isPalindrome p]