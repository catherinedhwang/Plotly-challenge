# Plot.ly Homework - Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

In this assignment, I built an interactive display board to depict the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Plotly

For this assignment, I used the D3 library to read in `samples.json` then created a horizontal bar with a dropdown menu of the top 10 OTUs found in the individual. Then, I created a bubble chart that displays each sample as well with hover text. Both charts are updated in live time with the user input. Once the user selects a new subject ID number, this dashboard will interactively pull the new data. Below is a snapshot of the board!

<img width="458" alt="bac" src="https://user-images.githubusercontent.com/75541219/114327255-4a160c00-9b06-11eb-9435-4ace789dd2e2.PNG">
