const axios = require('axios');
const fs = require('fs');
const path = require('path');

/**
 * 自动发现uni-app相关的优秀项目、文章和案例
 */
class UniAppDiscovery {
  constructor() {
    this.discoveries = {
      projects: [],
      articles: [],
      cases: []
    };
  }

  /**
   * 从GitHub搜索uni-app相关项目
   */
  async discoverGitHubProjects() {
    try {
      console.log('🔍 搜索GitHub上的uni-app项目...');
      
      const searchQueries = [
        'uni-app stars:>50',
        'uniapp stars:>30',
        'uni-app-x stars:>10'
      ];

      for (const query of searchQueries) {
        const response = await axios.get('https://api.github.com/search/repositories', {
          params: {
            q: query,
            sort: 'stars',
            order: 'desc',
            per_page: 20
          },
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'awesom-uni-discovery'
          }
        });

        const projects = response.data.items.map(repo => ({
          name: repo.name,
          full_name: repo.full_name,
          description: repo.description,
          html_url: repo.html_url,
          stars: repo.stargazers_count,
          language: repo.language,
          updated_at: repo.updated_at,
          topics: repo.topics || []
        }));

        this.discoveries.projects.push(...projects);
        
        // 避免API限制
        await this.sleep(1000);
      }

      console.log(`✅ 发现 ${this.discoveries.projects.length} 个GitHub项目`);
    } catch (error) {
      console.error('GitHub搜索失败:', error.message);
    }
  }

  /**
   * 从常见技术网站搜索uni-app文章
   */
  async discoverArticles() {
    console.log('📖 搜索uni-app相关文章...');
    
    // 模拟发现的文章数据（实际实现中可以爬取掘金、CSDN等网站）
    const sampleArticles = [
      {
        title: 'uni-app开发最佳实践指南',
        url: 'https://juejin.cn/post/example1',
        author: '开发者A',
        platform: '掘金',
        tags: ['uni-app', '最佳实践', '开发指南']
      },
      {
        title: 'uni-app x 新特性详解',
        url: 'https://blog.csdn.net/example2',
        author: '开发者B', 
        platform: 'CSDN',
        tags: ['uni-app x', '新特性', '教程']
      }
    ];

    this.discoveries.articles.push(...sampleArticles);
    console.log(`✅ 发现 ${this.discoveries.articles.length} 篇文章`);
  }

  /**
   * 发现优秀案例
   */
  async discoverCases() {
    console.log('💼 搜索uni-app案例...');
    
    // 模拟发现的案例数据
    const sampleCases = [
      {
        name: '电商小程序案例',
        description: '基于uni-app开发的多端电商应用',
        demo_url: 'https://example.com/demo1',
        features: ['多端适配', '购物车', '支付集成']
      },
      {
        name: '社交媒体应用',
        description: '使用uni-app x开发的社交应用',
        demo_url: 'https://example.com/demo2',
        features: ['实时聊天', '动态发布', '用户关注']
      }
    ];

    this.discoveries.cases.push(...sampleCases);
    console.log(`✅ 发现 ${this.discoveries.cases.length} 个案例`);
  }

  /**
   * 更新README文件
   */
  async updateReadme() {
    console.log('📝 更新README文件...');
    
    const readmePath = path.join(process.cwd(), 'README.md');
    let content = fs.readFileSync(readmePath, 'utf8');
    
    // 如果已经有自动生成的内容，先移除
    const startMarker = '<!-- AUTO-GENERATED-START -->';
    const endMarker = '<!-- AUTO-GENERATED-END -->';
    
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
      content = content.substring(0, startIndex) + content.substring(endIndex + endMarker.length);
    }
    
    // 生成新的内容
    const autoContent = this.generateReadmeContent();
    
    // 添加到README末尾
    content = content.trim() + '\n\n' + autoContent;
    
    fs.writeFileSync(readmePath, content);
    console.log('✅ README文件已更新');
  }

  /**
   * 生成README内容
   */
  generateReadmeContent() {
    const now = new Date().toISOString().split('T')[0];
    
    let content = `<!-- AUTO-GENERATED-START -->\n`;
    content += `## 🚀 优秀项目\n\n`;
    content += `*最后更新: ${now}*\n\n`;
    
    // 项目部分
    if (this.discoveries.projects.length > 0) {
      // 去重并排序
      const uniqueProjects = this.removeDuplicateProjects();
      const topProjects = uniqueProjects.slice(0, 10); // 只显示前10个
      
      topProjects.forEach(project => {
        content += `### [${project.name}](${project.html_url}) ⭐${project.stars}\n`;
        content += `${project.description || '暂无描述'}\n\n`;
      });
    }
    
    // 文章部分
    if (this.discoveries.articles.length > 0) {
      content += `## 📖 优秀文章\n\n`;
      this.discoveries.articles.forEach(article => {
        content += `- [${article.title}](${article.url}) - ${article.author} (${article.platform})\n`;
      });
      content += '\n';
    }
    
    // 案例部分
    if (this.discoveries.cases.length > 0) {
      content += `## 💼 优秀案例\n\n`;
      this.discoveries.cases.forEach(case_ => {
        content += `### ${case_.name}\n`;
        content += `${case_.description}\n`;
        if (case_.demo_url) {
          content += `[在线演示](${case_.demo_url})\n`;
        }
        content += '\n';
      });
    }
    
    content += `<!-- AUTO-GENERATED-END -->\n`;
    return content;
  }

  /**
   * 去除重复项目
   */
  removeDuplicateProjects() {
    const seen = new Set();
    return this.discoveries.projects.filter(project => {
      if (seen.has(project.full_name)) {
        return false;
      }
      seen.add(project.full_name);
      return true;
    }).sort((a, b) => b.stars - a.stars);
  }

  /**
   * 延迟函数
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * 运行发现流程
   */
  async run() {
    console.log('🤖 开始自动发现uni-app内容...\n');
    
    try {
      await this.discoverGitHubProjects();
      await this.discoverArticles();
      await this.discoverCases();
      await this.updateReadme();
      
      console.log('\n✅ 发现完成!');
      console.log(`📊 统计: ${this.discoveries.projects.length} 个项目, ${this.discoveries.articles.length} 篇文章, ${this.discoveries.cases.length} 个案例`);
      
    } catch (error) {
      console.error('❌ 发现过程中出现错误:', error);
      process.exit(1);
    }
  }
}

// 运行发现程序
if (require.main === module) {
  const discovery = new UniAppDiscovery();
  discovery.run();
}

module.exports = UniAppDiscovery;