# MZ's Game of Life

## Based on Conway's Game of Life except there are life stages, each with different rules.

#### Hover over the screen to kill cells, and hold the mouse down to add new cells.

#### P: Pause
#### R: restart
#### Backspace: clear
# 
### Cells begin as white, then turn yellow (Mature), then turn red (Senior), then blue (Spirit).
###
#
## Conway
#### Normal conway rules apply.
#
## Mature
#### Normal conway rules apply except a mature cell with more than 7 neighbors will always be alive. 
#
## Senior
#### If a dead senior cell has three neighbors (like normal conway rules), or if any senior cell has 5 or more neighbors, it is alive. If a senior cell is alive, it will die if it has less than 1 neighbor or more than 2 neighbors.
#
## Spirit
#### If a dead spirit cell has more than two neighbors and 4 or less neighbors, it is alive. If a spirit cell is alive, it will die if it has less than 1 neighbor or more than 2 neighbors (like a senior cell).
#
### This is the pattern that sets off a sprawling structure. The rotation doesn't matter. I call it an egg:
##### ![egg](resources/bug%20egg.png)
## <br>

### The egg then proceeeds to hatch and create this formation. I call it a bug:
##### ![hatching](resources/bug%20hatching.png)
## <br>
### Once this structure is formed it's usually the birth of an entire ecosystem, but occasionally the cells will become stable and die. The conditions for life in this system are rare, but the results are very interesting. Try to keep pressing restart until an egg forms naturally, or click on a live cell, or pause the animation and create your own egg!
