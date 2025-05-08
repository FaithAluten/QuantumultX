#!/usr/bin/env python3
# convert_surge_to_clash.py
# 将 Surge 规则集转换为 Clash 格式

import os
import re
import sys


def convert_line(line):
    """将单行 Surge 规则转换为 Clash 格式"""
    # 忽略注释和空行
    if line.startswith('#') or not line.strip():
        return None
    
    # 移除行尾注释
    line = re.sub(r'#.*$', '', line).strip()
    
    # 如果为空则跳过
    if not line:
        return None
    
    # 解析 Surge 规则
    parts = line.split(',', 2)
    if len(parts) < 2:
        return None
    
    rule_type = parts[0].strip().lower()
    domain = parts[1].strip()
    
    # 转换规则类型
    if rule_type == 'host':
        clash_type = 'DOMAIN'
    elif rule_type == 'host-suffix':
        clash_type = 'DOMAIN-SUFFIX'
    elif rule_type == 'host-keyword':
        clash_type = 'DOMAIN-KEYWORD'
    elif rule_type == 'ip-cidr':
        clash_type = 'IP-CIDR'
    elif rule_type == 'geoip':
        clash_type = 'GEOIP'
    else:
        # 不支持的规则类型
        return None
    
    return f"  - {clash_type},{domain}"


def convert_file(input_file, output_file):
    """将整个 Surge 规则文件转换为 Clash 格式"""
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    clash_rules = [convert_line(line) for line in lines]
    clash_rules = [rule for rule in clash_rules if rule is not None]
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("payload:\n")
        f.write('\n'.join(clash_rules))
        f.write('\n')


def main():
    # 获取仓库根目录中的所有 .list 文件
    repo_root = os.environ.get('GITHUB_WORKSPACE', '.')
    
    for filename in os.listdir(repo_root):
        if filename.endswith('.list'):
            input_path = os.path.join(repo_root, filename)
            # 创建同名的 .yaml 文件
            output_path = os.path.join(repo_root, f"{os.path.splitext(filename)[0]}.yaml")
            
            print(f"Converting {input_path} to {output_path}")
            convert_file(input_path, output_path)


if __name__ == "__main__":
    main()
