#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int findFib(int n, map<int, int> fibMap)
{
    // cout << fibMap[n] << " ";
    if (fibMap.count(n))
        return fibMap[n];
    if (n <= 2)
        return 1;
    fibMap.insert(pair(n, findFib(n - 1, fibMap) + findFib(n - 2, fibMap)));
    return fibMap[n];
}
int main()
{
    int n = 5;
    map<int, int> fibMap;
    cout << "Fib of " << n << " is " << findFib(n, fibMap) << endl;
}