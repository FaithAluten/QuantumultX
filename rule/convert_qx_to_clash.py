#!/usr/bin/env python3
# convert_qx_to_clash.py
# 将 qx 规则集转换为 clash 格式

import os
import re
import sys


def convert_line(line):
    """将单行 qx 规则转换为 clash 格式"""
    # 忽略注释和空行
    if line.startswith('#') or not line.strip():
        return None
    
    # 移除行尾注释
    line = re.sub(r'#.*$', '', line).strip()
    
    # 如果为空则跳过
    if not line:
        return None
    
    # 解析 qx 规则
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
    """将整个 qx 规则文件转换为 clash 格式"""
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    clash_rules = [convert_line(line) for line in lines]
    clash_rules = [rule for rule in clash_rules if rule is not None]
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("payload:\n")
        f.write('\n'.join(clash_rules))
        f.write('\n')


def main():
    # 获取仓库根目录
    repo_root = os.environ.get('GITHUB_WORKSPACE', '.')
    # 规则文件所在目录
    rules_dir = os.path.join(repo_root, 'rule')
    # 输出目录
    clash_dir = os.path.join(rules_dir, 'clash')
    
    # 确保输出目录存在
    os.makedirs(clash_dir, exist_ok=True)
    
    # 遍历 rule 目录中的所有 .list 文件
    for filename in os.listdir(rules_dir):
        if filename.endswith('.list'):
            input_path = os.path.join(rules_dir, filename)
            # 创建同名的 .yaml 文件在 clash 子目录中
            output_path = os.path.join(clash_dir, f"{os.path.splitext(filename)[0]}.yaml")
            
            print(f"Converting {input_path} to {output_path}")
            convert_file(input_path, output_path)


if __name__ == "__main__":
    main()
