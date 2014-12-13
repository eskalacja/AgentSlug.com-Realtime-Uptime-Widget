AgentSlug.com Realtime Uptime Widget
====================================
** Draft version **

Example, and source code of AgentSlug.com Realtime Uptime Widget.

#About the widget
Realtime Uptime Widget is a part of the AgentSlug.com uptime monitoring service.

If you test your website's uptime with the AgentSlug.com, you can create a public realtime uptime page.

As an extension to this functionality, we created a simple script. After simple configuration, the script injects an iframe with the public realtime uptime page (simplified).

For more information about the widget (with example of use), head on our [realtime uptime widget blogpost](http://inside.agentslug.com/story/upgrades/realtime-uptime-widget/).

#Like JSON? Here's one
There are two end points with recent uptime checks data: iframe and json.

Iframe loads all the html view and then updates automaticly the realtime uptime chart.

Json endpoint sends you last checks only in a JSON format.

##Iframe endpoint
http://agentslug.com/public/realtime/[secret]/[testID]?iframe=1&t="[title]"&height=[height of the chart]
Iframe endpoint has the same URL as your public realtime uptime page. To get a simplified view, there's only need to add an additional parameter *iframe=1*. 

You can also add a *height* and *title* configuration if you want.


##JSON endpoint
http://agentslug.com/ajax/getLastChecks/[testID]/[secret]

#Get it and use it anyway you want
Of course, we are not creating a repository just to show our code (which was public anyway).

You can get the code and treat it as an example, or base for you own widget. 

As long as you use our service, we are more than happy. If you need the code for any other purpose, we are OK with that too.
