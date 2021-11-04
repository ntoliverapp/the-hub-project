import pandas as pd
import matplotlib.pyplot as plt
import mpld3
fig = plt.figure()
# print(plt.style.available)
plt.style.use('seaborn-white')

plt.title('Contact Breakdown Analysis - Ids')

slices = [70,13,10,7]
labels = ['Yes', 'Undecided', 'No',  'Refused']
colors = ['#85cb33', '#fcca46', '#e7390d', '#9d0208']

plt.pie(slices, autopct='%1.1f%%', labels=labels, colors=colors, wedgeprops={'edgecolor': 'white'})

# plt.tight_layout()
# plt.savefig('campaign_pie.png')
# mpld3.show()
mpld3.save_html(fig, "campaign_pie.html")
# plt.show()









