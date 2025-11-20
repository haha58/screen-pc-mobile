
### 大屏适配介绍

Vue3 + TS + Echarts + Pinia 优秀可视化数据大屏解决方案，包括移动端与 PC 端的响应式适配处理<br>
账号：wenyan<br>
密码：123456


### node 版本

`node v16.14.2`



### 使用说明

1.  `pnpm install 或 yarn`
2.  `pnpm run dev`
3.  `代码提交需要符合 Eslint、Commitlint、Stylelint 等规范`
4.  `使用前请在 vscode 安装 Prettier Eslint Stylelint 等插件，方便格式化代码`

### 项目亮点

- 实现对不同大小的屏幕/设备的**良好适配**以及针对小屏幕设备有不同的**布局以及兼容**
- **不定高无限滚动加载虚拟列表**的实现，控制列表渲染数据量的同时实现列表**无限滚动**
<table>
  <tr>
    <th>参数/事件</th>
    <th>说明</th>
    <th>类型</th>
    <th>默认值</th>
  </tr>
  <tr>
    <td>
      <b>dataSource</b>
    </td>
    <td>传入的数组</td>
    <td>Array</td>
    <td>必传</td>
  </tr>
  <tr>
    <td>
      <b>loading</b>
    </td>
    <td>分页加载loading状态</td>
    <td>Boolean</td>
    <td>必传</td>
  </tr>
	<tr>
		<td>
			<b>@scrollEnd</b>
		</td>
		<td>列表滚动到底部触发的方法</td>
		<td>Function</td>
		<td>-</td>
	</tr>
</table>

```html
<new-virtual-list
	:data-source="github.dataSource"
	:loading="github.loading"
	@scroll-end="github.addData"
	class="virtual-list"
>
	<template #item="{ item }">
		<a-tooltip placement="top" color="rgba(73, 146, 255, 0.8)">
			<template #title>
				<span>项目名：{{ item.name }}</span>
			</template>
			<div class="virtual-list-item" @click="radarFirst.chart.addRadarData(item.name)">
				<span class="virtual-list-item-col">{{ item.name }}</span>
				<span class="virtual-list-item-col">{{ item.influence }}</span>
				<span class="virtual-list-item-col">{{ item.trend }}</span>
				<span class="virtual-list-item-col">{{ item.response }}</span>
				<span class="virtual-list-item-col">{{ item.activity }}</span>
				<span class="virtual-list-item-col">{{ item.github }}</span>
			</div>
		</a-tooltip>
	</template>
</new-virtual-list>
```

- Echarts 图表相关 hooks 的封装，提高如折柱混合图、图表详情弹窗的**代码复用性**
- 实现下拉搜索选择框、列表与**图表之间的增删交互**，根据文档**解决**雷达图等图表增删时的**异常问题**
- 使用 transition 标签以及**图片预加载**来优化图片未加载完全等导致的**用户视觉体验**问题
- 实现 Echarts 等组件的**按需加载**。在打包过程中对项目大体积模块进行分块打包以及优化项目字体文件大小

