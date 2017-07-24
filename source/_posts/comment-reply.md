title: "让主题支持typecho的嵌套回复"
date: 2011-10-03 05:00:42
tags:
---

现在用的traction主题是从WP主题移植过来的，不知哪位大神当年移植的时候把原版的嵌套回复给阉割掉了

导致我现在开启评论回复功能之后，所有回复的评论前台显示不出来，无奈一直是关闭评论回复的

昨晚找到了最最原版的traction主题，参考了一下模板里面的结构，有翻阅了好多typecho模板的相关资料

觉得有点头绪，决定自己动手改模板

还好当年上二学位时C语言学了一些，才没被一串一串的php代码搞的头晕

首先要把comments.php中的显示评论改成简化评论结构，就是这种：

	<?php $comments->listComments(); ?>

然后再在前面通过function **threadedComments**来控制评论输出的结构，使之配合模板中的评论结构<!--more-->

	<?php $this->comments()->to($comments); ?>

	<?php function threadedComments($comments, $options) { 
	?>
				<li id="<?php $comments->theId(); ?>" class="comment<?php $comments->alt(' odd', ' even'); ?>"> 
					<div class="comment-box clear"> 
						<div class="c-grav"> 
							<?php $comments->gravatar(40, 'X', '', 'avatar'); ?>
							<div class="c-author"><?php $comments->author(); ?></div> 
							<div class="c-date"><?php $comments->date('Y-m-d'); ?></div> 
						</div> 
						<div class="c-body"> 

	<?php $comments->content(); ?>

							<div class="comment-reply-link"> 
								   <?php $comments->reply(); //回复链接?>
							</div> 
						</div><!--end c-body--> 
					</div><!--end comment-box--> 

				</li> 
	<?php 
	}
	?>

	<?php $comments->listComments(); ?>
	<?php $comments->pageNav(); ?>

当然，还是会有细微的结构与模板中的有出入，没办法，再再CSS中自己控制一下吧

由于小弟水平有限，当评论嵌套到3层的时候始终不能把页面效果调到最满意，索性后台直接设置了最多评论嵌套两层

另外，在参考原版主题的时候，发现footer部分有一大块的内容居然也在移植的时候被精简掉了，这个难不倒我，自己动手扒过来 ...