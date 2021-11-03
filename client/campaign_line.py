import pandas as pd
import matplotlib.pyplot as plt
import mpld3
fig = plt.figure()
plt.style.use('seaborn-whitegrid')

days_x = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"]

contacts_y = [1000, 1200, 800, 1100, 1350, 1275, 1500, 1075, 1100, 1450]

plt.plot(days_x, contacts_y,marker='D',label='Contacts')

yes_ids_y = [800, 1000, 725, 900, 1050, 1100, 1250, 750, 800, 1300]

plt.plot(days_x, yes_ids_y, color="#86ca35",linestyle = "--", marker='D',label='Yes Ids')

vol_y = [80, 40, 65, 85, 70, 90, 100, 60, 70, 50]

plt.plot(days_x, vol_y,color="orange",linestyle = "--", marker='d',label='Volunteers')

plt.xlabel('Campaign Days to Date')
plt.ylabel('Daily Reports')
plt.title('Cumulative Report Summary')


plt.legend(loc = 'best', fontsize='large')

plt.grid(True)
plt.tight_layout()


# mpld3.save_html(fig, "campaign_line.html")

# plt.savefig('campaign_line.png')
mpld3.show()
plt.show()



