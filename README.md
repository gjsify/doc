# doc
Gjs and node-gtk Typescript API documentation

## FAQ

Problem: I get the following error:

```
FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory
```

Solution:

```bash
sudo sysctl -w vm.max_map_count=655300
```