title: "硬盘提速少花钱：为笔记本硬盘改造RAID功能"
date: 2014-03-13 03:15:40
tags:
---

硬盘提速少花钱

为笔记本硬盘改造RAID功能

目前对于大部分传统笔记本而言，处理器和显卡的性能已经变得比较强劲了，但是机械硬盘仍然是性能瓶颈。对于大部分用户而言，购买250GB以上容量固态硬盘，仍然是一笔不少的开销。对于预算有限的玩家来说，其实我们可以利用手中空闲的笔记本硬盘，通过软RAID的方法曲线提升笔记本磁盘性能。那么如何操作呢？通过这种方法改造后，笔记本的磁盘性能究竟能提升多少呢？和硬RAID相比，性能差别又有多大呢？

所有本都能组建软RAID

软RAID，顾名思义，是通过软件模拟的方式来组建RAID系统，不需要特殊的硬件支持。而组建硬RAID，则需要借助RAID卡或板载RAID芯片来实现，目前只有一些中高端的游戏本或台式电脑带有此功能。

因为软RAID不需要专门的硬件设备，因此几乎所有安装了Windows XP或以上操作系统的笔记本都可以组建该系统，因为从Windows XP操作系统时代开始，磁盘管理工具中就提供了软RAID功能，而且组建过程十分简单，不会涉及太多硬件改动。另外在组建时，系统对硬盘容量也没有特别的要求，这点和硬RAID是一样的。

组建简单无风险

软RAID的组建方式非常简单，但前提条件是你必须找到另外一块笔记本硬盘，其实从你闲置不用的笔记本中去拆解是个不错的想法。

比较有意思的是，软RAID也可以实现RAID0、RAID1和RAID5等磁盘模式，而且在同一系统中，我们还能利用多个硬盘分区，将两块硬盘不同的分区分别组建成RAID0或RAID1模式，这是硬RAID模式所无法实现的，因为硬RAID必须将整块硬盘全部纳入系统中才能开始组建，尤其是RAID0模式，必须先完成组建才能开始安装操作系统。当然体现在稳定度方面，它比软RAID要稳定很多。在Windows系统中，RAID0模式被称作带区卷模式，它拥有最佳的性能；RAID 1则被称作为镜像卷模式，拥有最佳的安全性。

至于组建步骤，可以简单归纳为三步：

<!--more-->

第一步：在光驱位加装硬盘

因为组建软RAID0至少需要用到两块硬盘，因此我们可以利用笔记本的光驱位来扩展，方法很简单，拆掉原有的光驱，借助光驱位硬盘转换托架，将新加装的机械硬盘安装到光驱位即可。需要提醒大家的是，目前光驱位硬盘转换托架有12.7mm和9.5mm两种厚度可选，大家需要购置适合自己笔记本厚度的光驱位硬盘转换托架。

第二步：将硬盘转换为动态磁盘

方法如下：鼠标右键点击“我的电脑——属性——磁盘管理”，在磁盘管理界面鼠标右键点击要转换的硬盘，选择“转换到动态磁盘”选项，忽略出现的“无法进入操作系统”的警告提示，将原有的硬盘从基本模式转换到动态模式，如果已经是动态磁盘模式则不需要转换。利用同样的方法将额外添加进来的硬盘也转换成动态硬盘。

但是为了保险起见，我们仍然建议大家在操作前备份重要数据，尽管我们将装有Windows7操作系统的硬盘转换到了动态磁盘后，分区和数据均完好，重新启动后也能再次进入Windows7操作系统。换句话说，如果你的系统已经安装有操作系统，是可以在不丢失数据的前提下进行组建的（再次重申备份数据），但是这个过程却是不可逆的。

另外在改造过程中我们也发现，有些已经安装有Windows7操作系统的笔记本无法将硬盘从基本磁盘转换到动态磁盘，鼠标右键点击硬盘根本就不会出现此选项，此时唯一的办法是重新安装操作系统，并利用Windows系统自带的分区工具分区，安装好后就可以进行转换了，否则需要三块硬盘才能组建该系统。

第三步：组建RAID0模式

此时在磁盘管理界面，鼠标右键点击下面一块机械硬盘，选择“新建带区卷”命令并选择另外一款动态磁盘，选中它后按照提示一步步操作即可。需要提醒大家的是，和硬RAID组建方式一样，组建成功后的带区卷容量，以两个分区中最小的容量的为准。

性能最高增幅77%

从测试的结果来看，我们将两块硬盘组建成为“带区卷（RAID0）”模式后，硬盘的读取速度得到了极大的提升（如表）。以速度最快的1TB机械硬盘为例，组建带区卷后，硬盘的AS SSD BenchMark随机读取速度提升到了172.86MB/s，相对之前100MB/s左右的速度，性能提升非常明显，而在该项目的其他测试和Fastcopy测试中，速度均得到了极大的增长，尤其是在500MB小文件的传输测试中，带区卷117MB/s的传输速度比1TB硬盘的69.27MB/s有77%的增幅。

性能表现和硬RAID接近

为了让大家更直观了解软RAID和硬RAID之间的性能差别，我们在统一的笔记本硬件和软件平台上，利用笔记本自带的硬RAID功能进行了测试，同样采用软RAID中用到的两块硬盘组建。

从测试结果表可以看出，和硬RAID0相比，软RAID0并没有表现出明显的劣势，起码从我们测试的样机来看答案是如此。在我们测试的四个项目中，软RAID0有两个项目均领先于硬RAID0，尤其是多个小文件的Fastcopy测试项目，硬RAID0的落后幅度居然还比较大。

编后：实现闲置硬盘价值好选择

关于软RAID，这已经不是什么新鲜话题了，以前我们在DIY平台上测试过利用三块盘组建软RAID。但是对于笔记本平台而言却很少有人涉及，因为以前很少有笔记本会带有硬RAID功能，因此我们也无法在同一平台上对软RAID的组建效果进行评估。但是通过上面的测试，想必结果有些出乎大家的意料，软RAID也获得了不逊色于硬RAID的性能表现，因此如果大家有条件，大家也可以尝试在其他更多平台上对此进行验证。

测试链接：[“带区卷”确实对磁盘性能提升效果明显](/striped-vilume-effect/)