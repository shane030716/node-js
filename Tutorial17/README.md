# Tutorial 17

### Packaging using JXcore

Tried to follow the instructions from the [JXcore's GitHub page](https://github.com/jxcore/jxcore/blob/master/doc/INSTALLATION.md), but couldn't get it installed. "Could not fetch" error.

Download JXCore from [https://github.com/jxcore/jxcore/archive/master.zip](https://github.com/jxcore/jxcore/archive/master.zip)
*Try not to download it in the same folder as the node.js files*

```
unzip master.zip
$ cd jxcore-master
$ ./configure
$ make
$ make install
```

Check version
```
jx --version
```

Copy everything (except README.md) from Tutorial 14 into Tutorial 17, then run
```
jx package server.js myApp
```

Launch
```
jx myApp.jx
```
[List of Tutorials](https://github.com/shane030716/node-js#list-of-tutorials)