-- The prime factors of 13195 are 5, 7, 13 and 29.
--
-- What is the largest prime factor of the number 600851475143?

factors :: Integer -> [Integer]
factors n = [x | x <- [2..n], n `mod` x == 0]

primeFactors :: Integer -> [Integer]
primeFactors 1 = [1]
primeFactors n = m : primeFactors (n `div` m)
  where m = head $ factors n

largestPrimeFactor :: Integer -> Integer
largestPrimeFactor = maximum . primeFactors